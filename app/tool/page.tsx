"use client";
import { useEffect, useState } from 'react'

export default function Tool() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState("m")
  const [sbmi, setSBMI] = useState("")
  const [message, setMessage] = useState("")
  const bmi_min = 10
  const bmi_max = 50

  useEffect(() => {
    setSBMI("0")
  }, [])

  function calculateBMI() {
    console.log("Calculating BMI")
    let result;
    if (height === 0 || weight === 0) {
      setSBMI("0")
    }
    else {
      result = (weight / ((height / 100) * (height / 100)))
      if (result < bmi_min) {
        setSBMI("< " + bmi_min.toString())
        return
      }
      if (result > bmi_max) {
        setSBMI("> " + bmi_max.toString())
        return
      }
      setSBMI(Math.round(result).toString())
      //* Data from https://plakos-akademie.de/bmi-rechner/
      // 1-10
      if (age >= 1 && age <= 10) {
        if (gender === "m") {
          if (result < 15) {
            setMessage("Underweight")
            return
          } if (result > 18) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 15) {
            setMessage("Underweight")
            return
          } if (result > 19) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 11-18
      if (age >= 11 && age <= 18) {
        if (gender === "m") {
          if (result < 17) {
            setMessage("Underweight")
            return
          } if (result > 22) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 17) {
            setMessage("Underweight")
            return
          } if (result > 23) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 19-24
      if (age >= 19 && age <= 24) {
        if (gender === "m") {
          if (result < 19) {
            setMessage("Underweight")
            return
          } if (result > 24) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 18) {
            setMessage("Underweight")
            return
          } if (result > 23) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 25-34
      if (age >= 25 && age <= 34) {
        if (gender === "m") {
          if (result < 20) {
            setMessage("Underweight")
            return
          } if (result > 25) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 19) {
            setMessage("Underweight")
            return
          } if (result > 24) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 35-44
      if (age >= 35 && age <= 44) {
        if (gender === "m") {
          if (result < 21) {
            setMessage("Underweight")
            return
          } if (result > 26) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 20) {
            setMessage("Underweight")
            return
          } if (result > 25) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 45-54
      if (age >= 45 && age <= 54) {
        if (gender === "m") {
          if (result < 22) {
            setMessage("Underweight")
            return
          } if (result > 27) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 21) {
            setMessage("Underweight")
            return
          } if (result > 26) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 55-64
      if (age >= 55 && age <= 64) {
        if (gender === "m") {
          if (result < 23) {
            setMessage("Underweight")
            return
          } if (result > 28) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 22) {
            setMessage("Underweight")
            return
          } if (result > 27) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 65+
      if (age >= 65) {
        if (gender === "m") {
          if (result < 24) {
            setMessage("Underweight")
            return
          } if (result > 29) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 23) {
            setMessage("Underweight")
            return
          } if (result > 28) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
    }
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">BMI</h2>
          <div className="app">
            <div className="content_container">
              <div className="content">
                <div className="content_title">
                  {/** <Title level={3}></Title>*/}
                </div>
                <div className="content_form">
                  <div className="form">
                    <div className="form_item">
                      <label htmlFor="height" className="label">Height in cm</label>
                      <input type="number" min="50" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={height} onChange={(e: any) => setHeight(e.target.value)} />
                    </div>
                  </div>
                  <div className="form_item">
                    <label htmlFor="weight" className="label">Weight in kg</label>
                    <input type="number" min="20"placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={weight} onChange={(e: any) => setWeight(e.target.value)} />
                  </div>
                  <div className="form_item">
                    <label htmlFor="weight" className="label">Age: {age}</label>
                    <input type="range" min="0" max="100" className="range" step="1" value={age} onChange={(e: any) => setAge(e.target.value)} />
                    <div className="w-full flex justify-between text-xs px-2">
                      <span>1</span>
                      <span>25</span>
                      <span>50</span>
                      <span>75</span>
                      <span>100</span>
                    </div>
                  </div>
                  <div className="form_item">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Female</span>
                        <input type="radio" name="radio-10" className="radio checked:bg-red-500" value="f" checked />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">Male</span>
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                      </label>
                    </div>
                  </div>
                  <div className="button">
                    <button className="btn btn-secondary" onClick={calculateBMI}>Calculate</button>

                  </div>

                  <div className="form_item" id="bmi">
                    <label htmlFor="bmi" className="bmi_title">Your BMI is</label>
                    <p className="label" id="bmi_label">{sbmi}</p>
                    <p className="msg">{message}</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}