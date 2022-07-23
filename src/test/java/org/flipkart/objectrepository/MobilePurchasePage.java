package org.flipkart.objectrepository;

import org.flipkart.resources.CommonAction;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.PageFactory;

public class MobilePurchasePage extends CommonAction {
	public MobilePurchasePage() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath="//button[text()='✕']")
	private WebElement login ;
	@FindBy(xpath="//input[@type='text']")
	private WebElement Search;
	@FindBys({
		@FindBy(xpath="//input[@type='text']"),
		@FindBy(name="q")
	})
	private WebElement AndSearch;
	@FindAll({
		@FindBy(xpath="//input[@type='text']"),
		@FindBy(name="q")
	})
	private WebElement OrSearch;
	@FindBy(xpath="(//div[@class='_4rR01T'])[1]")
	private WebElement Mob1;
	@FindBy(xpath="(//div[@class='_4rR01T'])[2]")
	private WebElement Mob2;
	@FindBy(xpath="(//div[@class='_4rR01T'])[3]")
	private WebElement Mob3;
	
	public WebElement getLogin() {
		return login;
	}
	public WebElement getSearch() {
		return Search;
	}
	public WebElement getMob1() {
		return Mob1;
	}
	public WebElement getMob2() {
		return Mob2;
	}
	public WebElement getMob3() {
		return Mob3;
	}
}
