const { chromium } = require('playwright');

async function testFix() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(3000);
    
    // Take a screenshot of the header area
    await page.screenshot({ 
      path: 'header-fix-test.png',
      clip: { x: 0, y: 0, width: 1200, height: 200 }
    });
    
    // Check if text is now visible
    const spiceElement = await page.locator('text=SPICE').first();
    const islandElement = await page.locator('text=ISLAND').first();
    
    if (await spiceElement.count() > 0) {
      const spiceStyles = await spiceElement.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
          color: computed.color,
          webkitTextFillColor: computed.webkitTextFillColor,
          visibility: computed.visibility,
          opacity: computed.opacity
        };
      });
      
      console.log('FIXED - SPICE element styles:', spiceStyles);
    }
    
    if (await islandElement.count() > 0) {
      const islandStyles = await islandElement.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
          color: computed.color,
          webkitTextFillColor: computed.webkitTextFillColor,
          visibility: computed.visibility,
          opacity: computed.opacity
        };
      });
      
      console.log('FIXED - ISLAND element styles:', islandStyles);
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
  
  await browser.close();
}

testFix();