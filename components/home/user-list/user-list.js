import { El } from "../../../utils/El.js";

export function UserList() {
  function GetUser() {
    fetch("https://676d4ea00e299dd2ddff1999.mockapi.io/UserList")
      .then((response) => response.json())
      .then((result) => {
        renderUser(result);
      })
      .catch((err) => console.log(err));
  }

  return El({
    element: "div",
    children: [
      El({ element: "div", children: ["UserList:"] }),
      El({
        element: "div",
        children: [
          El({
            element: "ul",
            className: "flex flex-col gap-4",
            id: "list",
            children: [
              El({
                element: "div",
                className: "border border-red-700 rounded-sm p-4",
                children: [
                  El({ element: "li", children: [item.name] }),
                  El({ element: "li", children: [item.age] }),
                  El({ element: "li", children: [item.city] }),
                  El({
                    element: "button",
                    className: "border border-red-700 rounded-sm p-2",
                    id: "add-btn",
                    type: "submit",
                    eventListener: [
                      {
                        event: "click",
                        callback: () => editUser(item.id),
                      },
                    ],
                    children: ["Edit"],
                  }),
                  El({
                    element: "button",
                    className: "border border-red-700 rounded-sm p-2",
                    id: "delete-btn",
                    type: "submit",
                    eventListener: [
                      {
                        event: "click",
                        callback: () => deleteUser(item.id),
                      },
                    ],
                    children: ["Delete"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
