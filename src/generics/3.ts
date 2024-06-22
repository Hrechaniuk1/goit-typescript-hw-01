// function merge (objA: Record<string, any>, objB: Record<string, any>): Record<string, any> {
//       return Object.assign(objA, objB);
//     }

function merge<T extends object, U extends object>(objA: T, objB: U): T&U | undefined {
    return Object.assign(objA, objB);
}