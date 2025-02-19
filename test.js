function getFirstHalf(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    const halfLength = Math.ceil(text.length / 2);
    const secondHalf = text.slice(halfLength);
    const dotIndex = secondHalf.indexOf('.');
    
    if (dotIndex === -1) {
        return text.slice(0, halfLength);
    }
    
    return text.slice(0, halfLength + dotIndex + 1);
}

// Example usage:
console.log(getFirstHalf("Hello.World")); // Output: "Hello."
console.log(getFirstHalf("HelloWorld")); // Output: "HelloW"
console.log(getFirstHalf("HelloWorld.ThisIsATest")); // Output: "HelloWorld."