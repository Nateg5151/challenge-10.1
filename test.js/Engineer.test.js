const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Nateg5151";
    const employeeInstance = new Engineer("Nathan", 2, "nategeurin@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Nateg5151";
    const employeeInstance = new Engineer("Nathan", 2, "nategeurin@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Nathan", 2, "nategeurin@gmail.com", "Nateg5151");
    expect(employeeInstance.getRole()).toBe(returnValue);
});