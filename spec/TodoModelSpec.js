describe ("TodoModel", function() {
	var todoModel;

	beforeEach(function() {
		todoModel = (new TodoModel()).initialize();
	});

	afterEach(function() {
		todoModel.destroy();
		todoModel = null;
	});

	describe ("#initializeメソッド", function() {
		it("初期化", function() {
			expect(todoModel).toBeDefined();
		});
	
	});
});
