package org.flipkart;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;

public class MobilePurchase {
	static WebDriver driver;
	static String Text;
	static String Text1;
	@Given("user launches flipkart application")
	public void user_launches_flipkart_application() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://www.flipkart.com/");
		driver.manage().window().maximize();
	}

	@Given("user login to flipkart")
	public void user_login_to_flipkart() {
		WebElement X=driver.findElement(By.xpath("//button[text()='✕']"));
		X.click();
	}

	@When("user search mobile")
	public void user_search_mobile() {
		WebElement Search=driver.findElement(By.xpath("//input[@type='text']"));
		Search.sendKeys("Redmi Mobiles",Keys.ENTER);
	}

	@When("user choose the mobile and doing payments")
	public void user_choose_the_mobile_and_doing_payments() throws Throwable {
		Thread.sleep(1000);
		WebElement Mob1=driver.findElement(By.xpath("(//div[@class='_4rR01T'])[1]"));
		Text=Mob1.getText();
		System.out.println(Text);
		Thread.sleep(1000);
		Mob1.click();
		Thread.sleep(1000);
		WebElement Mob2=driver.findElement(By.xpath("(//div[@class='_4rR01T'])[2]"));
		Mob2.click();
		Thread.sleep(1000);
		WebElement Mob3=driver.findElement(By.xpath("(//div[@class='_4rR01T'])[3]"));
		Mob3.click();
	}

	@Then("user receive order confirmation message")
	public void user_receive_order_confirmation_message() {
		Set<String> WH=driver.getWindowHandles();
		List<String> WH1=new ArrayList<String>(WH);
		for(String Y:WH1) {
		driver.switchTo().window(Y);
		driver.switchTo().window(WH1.get(3));
		}
		WebElement Mob=driver.findElement(By.xpath("//span[@class='B_NuCI']"));
		Text1=Mob.getText();
		System.out.println(Text1);
	}
	@Then("user quit the launches")
	public void user_quit_the_launches() {
	   driver.quit();
	}
	@When("user search mobile by using one dimensional list")
	public void user_search_mobile_by_using_one_dimensional_list(DataTable dataTable) {
	   List<String> L=dataTable.asList();
	   WebElement Search=driver.findElement(By.xpath("//input[@type='text']"));
		Search.sendKeys(L.get(1),Keys.ENTER);
	}
	@When("user search mobile by using one dimensional map")
	public void user_search_mobile_by_using_one_dimensional_map(DataTable dataTable) {
	   Map<String,String> M=dataTable.asMap(String.class, String.class);
	   WebElement Search=driver.findElement(By.xpath("//input[@type='text']"));
		Search.sendKeys(M.get("Phone1"),Keys.ENTER);
	}
	@When("user search mobile {string}")
	public void user_search_mobile(String names) {
		 WebElement Search=driver.findElement(By.xpath("//input[@type='text']"));
			Search.sendKeys(names,Keys.ENTER);
	}

}
