package org.flipkart;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.flipkart.objectrepository.MobilePurchasePage;
import org.flipkart.resources.CommonAction;
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

public class TvPurchase extends CommonAction {
	CommonAction C=new CommonAction();
	MobilePurchasePage M=new MobilePurchasePage();
	@When("user search Tv")
	public void user_search_Tv() {
		//WebElement Search=MobilePurchase.driver.findElement(By.xpath("//input[@type='text']"));
		C.insertText(M.getSearch(),"Onida Tv");
		
	}

	@When("user choose the Tv and doing payments")
	public void user_choose_the_Tv_and_doing_payments() throws Throwable {
		Thread.sleep(1000);
		WebElement Mob1=driver.findElement(By.xpath("(//div[@class='_4rR01T'])[1]"));
		String Text=Mob1.getText();
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

	@When("user search Tv by using one dimensional list")
	public void user_search_Tv_by_using_one_dimensional_list(DataTable dataTable) {
		 List<String> L=dataTable.asList();
		   WebElement Search=driver.findElement(By.xpath("//input[@type='text']"));
			Search.sendKeys(L.get(1),Keys.ENTER);

	}

	@When("user search Tv by using one dimensional map")
	public void user_search_Tv_by_using_one_dimensional_map(DataTable dataTable) {
		  Map<String,String> M=dataTable.asMap(String.class, String.class);
		   WebElement Search=driver.findElement(By.xpath("//input[@type='text']"));
			Search.sendKeys(M.get("Tv3"),Keys.ENTER);
	}

	@When("user search Tv {string}")
	public void user_search_Tv(String names) {
		WebElement Search=driver.findElement(By.xpath("//input[@type='text']"));
		Search.sendKeys(names,Keys.ENTER);
	}
}
