function merge (objA: Record<string, any>, objB: Record<string, any>): Record<string, any> {
      return Object.assign(objA, objB);
    }
    

function merge1<T extends object> (objA: T, objB: T): T {
          return Object.assign(objA, objB);
        }
        