import React, { useMemo } from "react";

export default function FilteredList(props) {
  const filterOverEighteen = useMemo(
    () => props.dataList.filter((user) => user.age > 18),
    [props.dataList]
  );

  return (
    <div>
      {filterOverEighteen.map((user) => (
        <div key={user.id}>
          <h2>
            {user.id} - {user.name}: {user.age} years old
          </h2>
        </div>
      ))}
    </div>
  );
}
