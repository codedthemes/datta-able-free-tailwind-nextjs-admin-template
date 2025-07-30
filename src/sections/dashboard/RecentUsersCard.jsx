// next
import Image from 'next/image';

// assets
const Avatar1 = '/assets/images/user/avatar-1.png';
const Avatar2 = '/assets/images/user/avatar-2.png';
const Avatar3 = '/assets/images/user/avatar-3.png';
const Avatar4 = '/assets/images/user/avatar-4.png';
const Avatar5 = '/assets/images/user/avatar-5.png';

// ===============================|| RECENT USERS CARD - DATA ||============================== //

const users = [
  {
    id: 1,
    name: 'Isabella Christensen',
    message: 'Lorem Ipsum is simply dummy text of…',
    avatar: Avatar1,
    status: 'online',
    time: '11 MAY 12:56'
  },
  {
    id: 2,
    name: 'Mathilde Andersen',
    message: 'Lorem Ipsum is simply dummy text of…',
    avatar: Avatar2,
    status: 'offline',
    time: '11 MAY 10:35'
  },
  {
    id: 3,
    name: 'Karla Sorensen',
    message: 'Lorem Ipsum is simply dummy text of…',
    avatar: Avatar3,
    status: 'online',
    time: '9 MAY 17:38'
  },
  {
    id: 4,
    name: 'Ida Jorgensen',
    message: 'Lorem Ipsum is simply dummy text of…',
    avatar: Avatar4,
    status: 'offline',
    time: '19 MAY 12:56'
  },
  {
    id: 5,
    name: 'Albert Andersen',
    message: 'Lorem Ipsum is simply dummy text of…',
    avatar: Avatar5,
    status: 'online',
    time: '21 JULY 12:56'
  }
];

// ==========================|| RECENT USERS CARD ||========================== //

export default function RecentUsersCard() {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-8">
      <div className="card table-card">
        <div className="card-header">
          <h5>Recent Users</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table-hover table">
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="unread">
                    <td>
                      <Image
                        className="max-w-10 rounded-full"
                        style={{ width: 40 }}
                        src={user.avatar}
                        alt={user.name}
                        width={40}
                        height={40}
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">{user.name}</h6>
                      <p className="m-0">{user.message}</p>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i
                          className={`ti ti-circle-filled text-[10px] ltr:mr-4 rtl:ml-4 ${
                            user.status === 'online' ? 'text-success' : 'text-danger'
                          }`}
                        ></i>
                        {user.time}
                      </h6>
                    </td>
                    <td>
                      <a href="#!" className="badge bg-theme-bg-2 mx-2 text-[12px] text-white">
                        Reject
                      </a>
                      <a href="#!" className="badge bg-theme-bg-1 text-[12px] text-white">
                        Approve
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
