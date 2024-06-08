import TemplatePointers from "./components/TemplatePointers"

function LandingIntro() {

    return (
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
                <div className="max-w-md">

                    <h1 className='text-3xl text-center font-bold '>
                        <img src="logo.webp" width={100} className="inline-block mr-2" alt="logo" />
                        Fraternidad Flojonazos
                    </h1>
                    <div className="text-center mt-10">
                        <img src='logo2.png' width={250} alt="Logo" className="inline-block" />
                    </div>
                    <TemplatePointers />
                </div>

            </div>
        </div>
    )

}

export default LandingIntro