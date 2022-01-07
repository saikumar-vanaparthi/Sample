define(["Sample/Test Cases/segment_data","Sample/Test Cases/sample1_data"], function() {
	describe("Sample/Test Suites/Sample1", function() {
		
		it("Sample/sample1", async function() {
			var _data = testcaseData_1638432852214.dataset;
			await kony.automation.playback.waitFor(["Sample/Home","Button0ha6573092c2643"]);
			kony.automation.button.click(["Sample/Home","Button0ha6573092c2643"]);
			kony.automation.segmentedui.click(["Sample/Home","Segment0i7a852b234c642[0,1]"]);
		});
	});
});
