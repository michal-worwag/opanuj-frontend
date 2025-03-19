import type { User } from '../model/User';
import { getStatusColor } from '../utils/statusColors';
import { useUsersQuery } from '../hooks/useUsersQuery';

const UsersList = () => {
  const { data: users, isLoading, error } = useUsersQuery();

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid gap-4" data-testid="users-list">
      {users?.map((user: User) => (
        <div
          key={user.id}
          data-testid="user-item"
          className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <span
              className={`px-2 py-1 rounded-lg text-sm font-medium ${getStatusColor(
                user.status
              )}`}
            >
              {user.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
