export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="py-3 px-10 no-underline bg-green-500 hover:bg-green-700 text-black text-center text-sm font-bold w-28">
        Logout
      </button>
    </form>
  )
}
