package org.flipkart;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources//Features//MobilePurchase.feature",
					 glue="org.flipkart",
				   plugin="html:target",
			   monochrome=true,
				   dryRun=false,
				     tags= {"~@smoke"})
public class TestRunner {

}
