import React from "react";
import MyInput from "./Ui/Input/MyInput";
import MySelect from "./Ui/Myselect/MySelect";
const PostFilter = ({ searchQuaryAndGlobal, setSearchQuaryAndGlobal }) => {
    return (
        <div>
            <MyInput
                value={searchQuaryAndGlobal.searchQuary}
                onChange={(e) => {
                    setSearchQuaryAndGlobal({
                        ...searchQuaryAndGlobal,
                        searchQuary: e.target.value,
                    });
                }}
                type="text"
                placeholder="Поиск..."
            />
            <MySelect
                value={searchQuaryAndGlobal.sortGlobal}
                onChange={(selectedSort) =>
                    setSearchQuaryAndGlobal({
                        ...searchQuaryAndGlobal,
                        sortGlobal: selectedSort,
                    })
                }
                defaultValue="Выберите тип сортировки"
                options={[
                    { name: "По названию", value: "title" },
                    { name: "По описанию", value: "body" },
                ]}
            />
        </div>
    );
};

export default PostFilter;
