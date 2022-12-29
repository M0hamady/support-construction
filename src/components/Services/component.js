import { montagat } from "data/DataMontagat";
import { person_user } from "data/Datausers";
import CardStats from "components/Cards/CardStats";
import Card_user from "components/Cards/Card_user";
import img from "../../assets/img/team-2-800x800.jpg";

const allcomponent = [...new Set(montagat.map((i) => i.masoulDegree))];
const all_compon_ser = [...new Set(person_user.map((i) => i.degree_name))];
// console.log(all_compon_ser, allcomponent);

export const all_user_order = (orderses) => {
  return orderses.map((order) => {
    return (
      <div className="m-4 ">
        <CardStats
          statSubtitle="orders"
          statTitle={(orderses.indexOf(order) + 1).toString()}
          statArrow="up"
          statPercent="60"
          statPercentColor="text-emerald-500"
          statDescripiron="Since last month"
          statIconName="far fa-chart-bar"
          statIconColor="bg-red-500"
        />
      </div>
    );
  });
};
export const all_user_comp = (val_list,loc) => {
  return val_list.map((item) => {
    if (item === "client") {
      return (
        <div className="m-4 " key={Math.random() * 100}>
          <Card_user
            statSubtitle={item}
            statTitle={item}
            statArrow="up"
            statPercent = {loc}
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
          
        </div>
      );
    } else if (item === "sales_person") {
      return (
        <div className="m-4 " key={Math.random() * 100}>
          <Card_user
            statSubtitle={item}
            statTitle={item}
            statArrow="up"
            statPercent={loc}
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
      );
    }
     else if (item === "manager") {
      return (
        <div className="m-4 " key={Math.random() * 100}>
          <Card_user
            statSubtitle={item}
            statTitle={item}
            statArrow="up"
            statPercent={loc}
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
      );
    }
     else if (item === "admin") {
      return (
        <div className="m-4 " key={Math.random() * 100}>
          <Card_user
            statSubtitle={item}
            statTitle={item}
            statArrow="up"
            statPercent={loc}
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
      );
    }
    return allcomponent.map((each_com) => {
      if (item === each_com) {
        return (
          <div className="m-4 " key={Math.random() * 100}>
            <CardStats
              statSubtitle="comp"
              statTitle={"num: " + item[18].toString()}
              statArrow="up"
              statPercent="50"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
        );
      }
    });
  });
};
export const all_worker = () => {
  const is_masool = (degree_name) => allcomponent.includes(degree_name);
  return person_user.map((user) => {
    return (
      <div
        key={Math.random() * 100}
        className=" bg-white flex flex-wrap w-100   rounded"
        style={{
          margin: "20px",
          maxWidth: "100%",
          borderBottom: "1px solid rgb(0 0 0 / 50%)",
          boxShadow: "2px 5px 10px 0px rgb(0 0 0 / 20%) ",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className=" justify-content-center flex  text-center m-2 "
          style={{
            borderRadius: "50%",
            alignItems: "center",
          }}
        >
          <img
            className="w-20 h-20 rounded-full"
            src={img}
            alt="..."
            style={{
              width: "100px",
              height: "100px",
              boxShadow: "-2px 5px 8px 0px #0000007a ",
              backgroundImage: "",
            }}
          />
          <h3
            className="font-bold bg-blueGray-600 uppercase p-2 m-2 text-white rounded  text-black-500 text-center  "
            style={{ fontSize: "12px", minWidth: "120px", height: "30px" }}
          >
            name: <strong> {user.name}</strong>
          </h3>
        </div>
        <div className="m-4 ">
          <CardStats
            statSubtitle="orders"
            statTitle={user.orders.length.toString()}
            statArrow="up"
            statPercent="60"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        {all_user_comp(user.degree_name,user.location)}
      </div>
    );
  });
};
