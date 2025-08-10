async function fetchUserDetails(currentUserId) {

    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const result = apiResponse.json();
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export default async function UserDetailsPage({params}) {
    // console.log(params);  // getting the id from [details]
    const userDetails = await fetchUserDetails(params.details);
    return(
        <>
        <h1>User Details Page</h1>
        <p>{userDetails?.firstName} {userDetails?.lastName}</p>  
        <p>{userDetails?.age}</p>
        <p>{userDetails?.email}</p>
        <p>{userDetails?.phone}</p>
        <p>{userDetails?.birthDate}</p>
        </>
    );    
};
