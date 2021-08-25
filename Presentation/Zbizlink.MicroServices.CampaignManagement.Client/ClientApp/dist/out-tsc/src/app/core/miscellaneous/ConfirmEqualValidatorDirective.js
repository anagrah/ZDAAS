export class MyErrorStateMatcher {
    isErrorState(control, form) {
        const invalidParent = !!(control
            && control.parent
            && control.parent.invalid
            && control.parent.dirty
            && control.parent.hasError('notSame'));
        return (invalidParent);
    }
}
//# sourceMappingURL=ConfirmEqualValidatorDirective.js.map