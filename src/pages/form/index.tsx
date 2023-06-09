import { type NextPage } from "next";
import { type ChangeEvent, useRef, useState, type FormEvent } from "react";
import { CheckBox } from "~/components/checkbox";
import { Input } from "~/components/input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api } from "~/utils/api";

export type FormProps = {
  category: string[];
  otherCategory?: string;
  experience: string;
  comment?: string;
};

const Form: NextPage = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [checkValues, setCheckValues] = useState<string[]>([]);

  const [formData, setFormData] = useState<FormProps>({
    category: [],
    otherCategory: "",
    experience: "",
    comment: "",
  });

  const [onSubmit, setOnSubmit] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as unknown as string;
    if (event.target.checked) {
      setCheckValues([...checkValues, value]);
      setFormData({ ...formData, category: [...checkValues, value] });
    } else {
      setCheckValues(checkValues.filter((v) => v !== value));
      setFormData({
        ...formData,
        category: checkValues.filter((v) => v !== value),
      });
    }
  };
  const resetFormData = () => {
    setFormData({
      category: [],
      otherCategory: "",
      experience: "",
      comment: "",
    });

    setCheckValues([]);
  };

  const createForm = api.form.submit.useMutation({
    onSuccess: () => {
      toast.success("Form submitted successfully.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      setOnSubmit(false);
      resetFormData();
      formRef.current?.reset();
    },
    onError: ({ message }) => {
      toast.error(message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      setOnSubmit(false);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    createForm.mutate({
      ...formData,
    });

    setOnSubmit(true);
  };

  const { data: categories } = api.categories.getCategories.useQuery();

  return (
    <>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {categories ? (
          <>
            <div className="mx-auto mb-10 max-w-4xl px-3 pt-4">
              <h1 className="text-2xl font-semibold text-primary">
                Microaggression in Healthcare Examples Database
              </h1>
              <form className="mt-4" ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor="category" className="text-lg tracking-wider">
                  1. What&apos;s the category of microaggression you&apos;d like
                  to report?
                  <span className="text-error"> *</span>
                </label>

                {categories.map((category) => (
                  <CheckBox
                    key={category.id}
                    category={category}
                    checkboxRef={checkboxRef}
                    onChange={handleCheckboxChange}
                    checkboxValues={checkValues}
                  />
                ))}

                <Input
                  label="2. If you chose Other, please state your category"
                  required={false}
                  disabled={!checkValues.includes("Other")}
                  onChange={(
                    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    setFormData({
                      ...formData,
                      otherCategory: event.target.value,
                    });
                  }}
                  placeholder="Enter your answer"
                  type="text"
                />

                <Input
                  label="3. Please share your experience."
                  required={true}
                  disabled={false}
                  placeholder="Enter your answer"
                  onChange={(
                    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    setFormData({
                      ...formData,
                      experience: e.target.value,
                    });
                  }}
                  type="textarea"
                />

                <Input
                  label="4. Anything else you want to comment on?"
                  required={false}
                  disabled={false}
                  placeholder="Enter your answer"
                  onChange={(
                    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    setFormData({
                      ...formData,
                      comment: e.target.value,
                    });
                  }}
                  type="textarea"
                />

                <button
                  type="submit"
                  className={`btn w-full sm:w-[300px] ${
                    onSubmit ? "loading" : ""
                  } mt-4 text-lg normal-case`}
                >
                  {onSubmit ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="max-w-8xl mx-auto px-3">
            <h1 className="text-xl">Loading form...</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
