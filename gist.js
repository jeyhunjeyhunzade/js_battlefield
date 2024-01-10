{const foo = "foo";

// Behaves identically to "export default foo;"
export { foo as default };}

{

    // Variable declarations cannot occur inside inline default exports e
    export default const foo = 'bar';
    // Only identifiers can appear in export clauses 
    export { 123 as foo }'
    // Aliasing only can occur in export clauses 
    export const foo = 'foo' as myFoo;
}
