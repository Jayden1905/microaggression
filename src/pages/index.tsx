import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: formData } = api.form.getAllFormData.useQuery();

  return (
    <>
      <main className="max-w-8xl mx-auto px-3 pt-4">
        {formData ? (
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-primary">
                  <th></th>
                  <th className="text-lg">Categories</th>
                  <th className="text-lg">Other Categories</th>
                  <th className="text-lg">Experience</th>
                  <th className="text-lg">Comment</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((data, index) => (
                  <tr key={data.id} className="hover text-base">
                    <th className="align-top">{index + 1}</th>
                    <td className="whitespace-normal align-top">
                      {data.category}
                    </td>
                    <td className="align-top">
                      {data.otherCategory === "" ? "N/A" : data.otherCategory}
                    </td>
                    <td className="whitespace-normal align-top">
                      {data.experience}
                    </td>
                    <td className="whitespace-normal align-top">
                      {data.comment === "" ? "N/A" : data.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h1 className="text-xl">Loading data...</h1>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
