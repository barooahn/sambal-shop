"use client";

import { Shield, Truck, Award, CheckCircle, Star, Clock, RefreshCw, Heart } from "lucide-react";

interface TrustIndicatorsProps {
	layout?: 'horizontal' | 'grid' | 'compact';
	showSecurityBadges?: boolean;
	showDeliveryInfo?: boolean;
	showCustomerStats?: boolean;
	showGuarantees?: boolean;
	className?: string;
}

export default function TrustIndicators({ 
	layout = 'horizontal',
	showSecurityBadges = true,
	showDeliveryInfo = true, 
	showCustomerStats = true,
	showGuarantees = true,
	className = ""
}: TrustIndicatorsProps) {
	
	const indicators = [
		...(showSecurityBadges ? [
			{
				icon: Shield,
				title: "Secure Checkout",
				description: "SSL encrypted payments",
				color: "text-green-600",
				bgColor: "bg-green-50"
			},
			{
				icon: Award,
				title: "Authentic Quality",
				description: "Chef Yossie's traditional recipes",
				color: "text-burgundy-600", 
				bgColor: "bg-burgundy-50"
			}
		] : []),
		...(showDeliveryInfo ? [
			{
				icon: Truck,
				title: "Free UK Delivery",
				description: "On orders over £20",
				color: "text-blue-600",
				bgColor: "bg-blue-50"
			},
			{
				icon: Clock,
				title: "Fast Dispatch",
				description: "Ships within 2 business days",
				color: "text-orange-600",
				bgColor: "bg-orange-50"
			}
		] : []),
		...(showCustomerStats ? [
			{
				icon: Star,
				title: "4.8/5 Rating",
				description: "From 240+ verified reviews",
				color: "text-amber-600",
				bgColor: "bg-amber-50"
			},
			{
				icon: Heart,
				title: "Customer Loved",
				description: "95% reorder rate",
				color: "text-red-600",
				bgColor: "bg-red-50"
			}
		] : []),
		...(showGuarantees ? [
			{
				icon: RefreshCw,
				title: "30-Day Returns",
				description: "Hassle-free guarantee",
				color: "text-purple-600",
				bgColor: "bg-purple-50"
			},
			{
				icon: CheckCircle,
				title: "Quality Promise",
				description: "100% satisfaction guaranteed",
				color: "text-green-600",
				bgColor: "bg-green-50"
			}
		] : [])
	];

	const getLayoutClasses = () => {
		switch (layout) {
			case 'grid':
				return 'grid grid-cols-2 md:grid-cols-4 gap-4';
			case 'compact':
				return 'flex flex-wrap justify-center gap-3';
			default:
				return 'flex flex-wrap justify-center gap-6';
		}
	};

	const getItemClasses = () => {
		switch (layout) {
			case 'grid':
				return 'text-center p-4 rounded-xl border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow';
			case 'compact':
				return 'flex items-center space-x-2 px-3 py-2 rounded-full border border-gold-200/50 text-sm';
			default:
				return 'flex items-center space-x-3 bg-white/60 px-4 py-3 rounded-xl border border-gold-200/50 shadow-sm hover:shadow-md transition-shadow';
		}
	};

	return (
		<div className={`${getLayoutClasses()} ${className}`}>
			{indicators.map((indicator, index) => {
				const Icon = indicator.icon;
				
				if (layout === 'grid') {
					return (
						<div key={index} className={`${getItemClasses()} ${indicator.bgColor}`}>
							<div className={`w-12 h-12 ${indicator.color} mx-auto mb-3 flex items-center justify-center`}>
								<Icon className="w-6 h-6" />
							</div>
							<h4 className="font-bold text-burgundy-900 mb-1 font-brand text-sm">
								{indicator.title}
							</h4>
							<p className="text-xs text-neutral-600 font-body">
								{indicator.description}
							</p>
						</div>
					);
				}
				
				if (layout === 'compact') {
					return (
						<div key={index} className={`${getItemClasses()} bg-white/60`}>
							<Icon className={`w-4 h-4 ${indicator.color}`} />
							<span className="font-medium text-neutral-700">{indicator.title}</span>
						</div>
					);
				}
				
				return (
					<div key={index} className={getItemClasses()}>
						<div className={`flex-shrink-0 w-10 h-10 ${indicator.color} flex items-center justify-center`}>
							<Icon className="w-5 h-5" />
						</div>
						<div>
							<div className="font-bold text-burgundy-900 font-brand text-sm">
								{indicator.title}
							</div>
							<div className="text-xs text-neutral-600 font-body">
								{indicator.description}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export function SecurityBadges({ className = "" }: { className?: string }) {
	return (
		<div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
			<div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-lg border border-green-200/50 shadow-sm">
				<Shield className="w-5 h-5 text-green-600" />
				<span className="text-sm font-medium text-green-800">SSL Secured</span>
			</div>
			<div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-lg border border-blue-200/50 shadow-sm">
				<CheckCircle className="w-5 h-5 text-blue-600" />
				<span className="text-sm font-medium text-blue-800">GDPR Compliant</span>
			</div>
			<div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-lg border border-purple-200/50 shadow-sm">
				<Award className="w-5 h-5 text-purple-600" />
				<span className="text-sm font-medium text-purple-800">Authentic Recipes</span>
			</div>
		</div>
	);
}

export function DeliveryGuarantee({ className = "" }: { className?: string }) {
	return (
		<div className={`bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200/50 ${className}`}>
			<div className="text-center">
				<div className="flex items-center justify-center mb-4">
					<div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
						<Truck className="w-8 h-8 text-white" />
					</div>
				</div>
				<h3 className="text-xl font-bold text-burgundy-900 mb-2 font-brand">
					Delivery Guarantee
				</h3>
				<div className="space-y-2 text-sm text-neutral-700 font-body">
					<div className="flex items-center justify-center space-x-2">
						<CheckCircle className="w-4 h-4 text-green-600" />
						<span>Free UK delivery on orders over £20</span>
					</div>
					<div className="flex items-center justify-center space-x-2">
						<CheckCircle className="w-4 h-4 text-green-600" />
						<span>Dispatched within 2 business days</span>
					</div>
					<div className="flex items-center justify-center space-x-2">
						<CheckCircle className="w-4 h-4 text-green-600" />
						<span>Tracked delivery to your door</span>
					</div>
					<div className="flex items-center justify-center space-x-2">
						<CheckCircle className="w-4 h-4 text-green-600" />
						<span>Secure packaging for freshness</span>
					</div>
				</div>
			</div>
		</div>
	);
}