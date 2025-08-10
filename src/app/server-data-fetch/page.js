import Link from "next/link";


async function fetchListOfUsers() {
        try {
            const apiResponse = await fetch('https://dummyjson.com/users');
            
            // Check if the response is okay (status 200-299)
            if (!apiResponse.ok) {
                throw new Error(`HTTP error! status: ${apiResponse.status}`);
            }

            const result = await apiResponse.json();
            return result.users;
        } catch (err) {
            console.error("Failed to fetch users:", err);
            throw new Error(err.message || "Something went wrong while fetching users.");
        }
    }


    export default async function ServerSideDataFetching() {
        const listOfUsers = await fetchListOfUsers();
        return (
            <div className="p-10">
                <h1>Server Side Data Fetching: User List Page</h1>
                <ul>
                    {listOfUsers && listOfUsers.length > 0
                        ? listOfUsers.map(user => <li className="mt-5 cursor-pointer" key={user.id}>
                            <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                            </li>)
                        : null}
                </ul>
            </div>
        );
    }
