import React, { useState } from 'react';

import './RadioGroup.css';

const RadioGroup = ({
  data,
  styleClass,
  questionID,
  setReply
}) => {
  const [radio, setRadio] = useState(0);
  const handleChange = (id, label) => {
    setRadio(id);
    setReply(questionID, label);
  };
  return (
    <div className={`radio-group ${styleClass}`}>
      {data.map((item) => {
        return (
          <label className={`radio-label checked-${radio === item.answer_id}`} key={item.answer_id} htmlFor={item.answer_id} aria-label={item.label}>
            <input
              className="input-radio"
              type="radio"
              checked={radio === item.answer_id}
              name={item.name}
              id={item.answer_id}
              onChange={() => handleChange(item.answer_id, item.label)} />
            <span>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
};
export default RadioGroup;
