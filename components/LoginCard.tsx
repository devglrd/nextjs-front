import s from "./LoginCard.module.css"

function LoginCard() {
  return (
    <div className={s.card}>
      <h1 className={s.title}>Inscription</h1>
      <h2 className={s.subtitle}>rejoignez la révolution NFT</h2>

      {/* FORM */}
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="username"
            >
              votre email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="username"
              type="email"
              placeholder="johndoe@gmail.com"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-username"
            >
              votre prénom, nom ou pseudonyme
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-username"
              type="text"
              placeholder="johndoe"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-1">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="birthdate"
            >
              votre date de naissance
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="birthdate"
              type="date"
            />
          </div>
        </div>
        <p className="text-gray-400 text-sm text-center mb-6">
          Elle ne sera pas affichée sur votre profil public
        </p>

        {/* BUTTON */}
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full">
          Continuer
        </button>
      </form>
    </div>
  )
}

export default LoginCard
