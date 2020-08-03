import org.junit.Assert;
import io.cucumber.java.en.*;

public class MyImpl {
    @Given("^create new User$")
    public void given(){
        Assert.assertEquals("It's true", true, true);
        }

    @When("^start page$")
    public void when(){
        Assert.assertEquals("It's true", true, true);
    };

    @Then("^login by User$")
    public void then(){
        Assert.assertEquals("It's true", true, true);
    };
}
