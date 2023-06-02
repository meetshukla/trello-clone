interface Board {
  columns: Map<TypedCloumn, Column>;
}

type TypedCloumn = "todo" | "inprogress" | "done";

interface Column {
  id: TypedCloumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedCloumn;
  image?: Image;
}

interface Image {
  bucketId: string;
  fileId: string;
}
