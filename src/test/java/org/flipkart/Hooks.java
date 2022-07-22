package org.flipkart;


import org.flipkart.resources.CommonAction;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hooks extends CommonAction {
	CommonAction C=new CommonAction();
	public static WebDriver driver;
	@Before
	public void beforeScenario() {
		C.beforelaunch();
		System.out.println("Before Scenario");
	}
	@After
	public void AfterScenario() {
		C.browserQuit();
		System.out.println("After Scenario");
	}
}
