'use client';

//same can be done with swr but not important for now

import { Fragment, useEffect, useState } from "react";

export default function ClientSideDataFetching() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    async function fetchListOfUsers() {
        try {
            const apiResponse = await fetch('https://dummyjson.com/users');
            // Await the json() method to get the data
            const result = await apiResponse.json();
            if (result?.users) {
                setUsers(result.users);
            } else {
                console.error("No users found in the response.");
            }
        } catch (error) {
            console.error("Error fetching users on client side:", error);
            setUsers([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    if (loading) {
        return (
            <h3 className="font-extrabold text-3xl">Loading users! Please wait</h3>
        );
    }

    return (
        <Fragment>
            <h1>Client Side Data Fetching</h1>
            <ul>
                {users.length > 0
                    ? users.map(user => (
                        <li className="mt-5 cursor-pointer" key={user.id}>
                            {user.firstName}
                        </li>
                    ))
                    : <li>No users found</li>}
            </ul>
        </Fragment>
    );
}
