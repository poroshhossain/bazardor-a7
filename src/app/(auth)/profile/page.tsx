const ProfilePage = () => {
  return (
    <section>
        <div className="max-w-7xl mx-auto px-4">
            <div className="mx-auto">
                {/* img */}
            </div>
            <h1>আমার প্রোফাইল</h1>
            <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                    {/* img */}
                    <div className="">
                        <h2>name</h2>
                        <p>email</p>
                    </div>
                </div>
                <div className="">
                    ↩ সাইন আউট
                </div>
            </div>
        </div>
    </section>
  )
}
export default ProfilePage