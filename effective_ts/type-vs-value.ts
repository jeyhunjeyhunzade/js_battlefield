/*
    To ascertain the type of shape you’re dealing with, you’ll need some way to recon‐ struct 
    its type at runtime. In this case you can check for the presence of a height property
    This works because the property check only involves values available at runtime, 
    but still allows the type checker to refine shape’s type to Rectangle.
*/
{
  interface Square {
    width: number;
  }
  interface Rectangle extends Square {
    height: number;
  }
  type Shape = Square | Rectangle;
  const calculateArea = (shape: Shape) => {
    if ("height" in shape) {
      shape; // Type is Rectangle
      return shape.width * shape.height;
    } else {
      shape; // Type is Square
      return shape.width * shape.width;
    }
  };
}

/*
    Another way would have been to introduce a “tag” to explicitly store the type in a way 
    that’s available at runtime
*/
{
  interface Square {
    kind: "square";
    width: number;
  }
  interface Rectangle {
    kind: "rectangle";
    height: number;
    width: number;
  }
  type Shape = Square | Rectangle;
  const calculateArea = (shape: Shape) => {
    if (shape.kind === "rectangle") {
      shape; // Type is Rectangle
      return shape.width * shape.height;
    } else {
      shape; // Type is Square
      return shape.width * shape.width;
    }
  };
}

{
  // type space
  type T1 = "string literal";
  type T2 = 123;
  // value space
  const v1 = "string literal";
  const v2 = 123;
}

{
  interface Person {
    username: string;
    email: string;
  }

  let p: Person = { username: "mrj", email: "mrj@mail.com" };
  const email = (p: Person, subject: string, body: string): Response => {
    let res: Response = {} as Response;
    return res;
  };

  type T1 = typeof p; // Type is Person
  type T2 = typeof email; // Type is (p: Person, subject: string, body: string) => Response

  const v1 = typeof p; // Value is "object"
  const v2 = typeof email; // Value is "function"
}
