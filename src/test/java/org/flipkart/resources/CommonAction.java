package org.flipkart.resources;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.flipkart.Hooks;
import org.flipkart.objectrepository.MobilePurchasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CommonAction {
	public static WebDriver driver;

	public void beforelaunch() {
		WebDriverManager.chromedriver().setup();
		ChromeOptions options =new ChromeOptions();
		options.addArguments("start-maximized");
		options.addArguments("disable-popup-blocking");
		options.addArguments("--headless");
		driver=new ChromeDriver(options);
		driver.get("https://www.flipkart.com/");
		//driver.manage().window().maximize();
	}
	public void sendKeys() {
		WebElement Search=driver.findElement(By.xpath("//input[@type='text']"));
		Search.sendKeys("Redmi Mobiles",Keys.ENTER);
	}
	public void windowHandles() {
		Set<String> WH=driver.getWindowHandles();
		List<String> WH1=new ArrayList<String>(WH);
		for(String Y:WH1) {
		driver.switchTo().window(Y);
		driver.switchTo().window(WH1.get(3));
		}
		WebElement Mob=driver.findElement(By.xpath("//span[@class='B_NuCI']"));
		String Text1=Mob.getText();
		System.out.println(Text1);
	}
	public void insertText(WebElement Ele,String Value) {
		Ele.sendKeys(Value,Keys.ENTER);
	}
	public void browserQuit() {
		driver.quit();
	}
}
