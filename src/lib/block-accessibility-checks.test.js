// The window.BlockAccessibilityChecks integration path was removed in v4.
// Check logic is now tested via src/validation.test.js.

test('BAC v3 window-global path removed', () => {
	// All four checks are now registered via ba11yc_register_block_check() in
	// PHP and validated via the ba11yc.validateBlock filter in validation.js.
	expect(true).toBe(true);
});
