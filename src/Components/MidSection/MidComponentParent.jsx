import React from "react";
import MidComponentItem from "./MidComponentItem";
import MidPhone1 from "../../assets/images/midPhone.png";
import MidPhone2 from "../../assets/images/midPhone2.png";

const MidComponentParent = () => {
  return (
    <div>
      <div>
        <MidComponentItem
          title="Tajribali ustoz"
          text="INGLIZ TILI ENDI OSON!
🎓Canadaning UCW universitetida o’qigan malakali ustoz
🚀 5+ yillik tajriba, IELTS 7.0
📍Online va offline kurslar"
          img={MidPhone1}
          reverse
        ></MidComponentItem>
      </div>
      <div>
        <MidComponentItem
          title="Avzal taraflarimiz"
          img={MidPhone2}
        ></MidComponentItem>
      </div>
    </div>
  );
};

export default MidComponentParent;
