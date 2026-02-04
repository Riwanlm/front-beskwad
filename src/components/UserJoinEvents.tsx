import { CircleX, Search } from "lucide-react";

export const UserJoinEvents = () => {

  return (
    <fieldset className="fieldset w-full max-w-full max-h-[400px] overflow-y-auto border rounded-md border-OrangeBase">
      <legend className="fieldset-legend px-2 md:px-4 md:mx-4">Liste de vos participations aux évènements</legend>
      <div className="block text-center">
        <button className="btn btn-wide btn-outline btn-info m-auto my-5"><Search size={18} /> Rechercher un évènement</button>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="table mb-5 min-w-max">
          {/* head */}
          <thead>
            <tr>
              <th>N°</th>
              <th>Titre</th>
              <th>Date</th>
              <th>Addresse</th>
              <th>Nbs participants</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <td>
                <span>3</span>
              </td>
              <th>
                <button className="btn btn-info btn-outline btn-sm">details</button>
              </th>
              <th>
                <button className="btn btn-circle btn-outline btn-md btn-error">
                  <CircleX size={18} />
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <span>2</span>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>Red</td>
              <td>
                <span>8</span>
              </td>
              <th>
                <button className="btn btn-info btn-outline btn-sm">details</button>
              </th>
              <th>
                <button className="btn btn-circle btn-outline btn-md btn-error">
                  <CircleX size={18} />
                </button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <span>3</span>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <td>Crimson</td>
              <td>
                <span>5</span>
              </td>
              <th>
                <button className="btn btn-info btn-outline btn-sm">details</button>
              </th>
              <th>
                <button className="btn btn-circle btn-outline btn-md btn-error">
                  <CircleX size={18} />
                </button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <span>4</span>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
              <td>
                <span>2</span>
              </td>
              <th>
                <button className="btn btn-info btn-outline btn-sm">details</button>
              </th>
              <th>
                <button className="btn btn-circle btn-outline btn-md btn-error">
                  <CircleX size={18} />
                </button>
              </th>
            </tr>
            {/* row 5 */}
            <tr>
              <td>
                <span>5</span>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
              <td>
                <span>2</span>
              </td>
              <th>
                <button className="btn btn-info btn-outline btn-sm">details</button>
              </th>
              <th>
                <button className="btn btn-circle btn-outline btn-md btn-error">
                  <CircleX size={18} />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </fieldset>
  );
};