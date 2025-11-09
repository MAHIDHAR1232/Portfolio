export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                {/* <img src="./assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                <img src="./assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" /> */}
                <p>ANGAM MAHIDHAR</p>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a
                        href="mailto:mahi200534@gmail.com"
                        onClick={(e) => {
                            if (!window.navigator.msSaveOrOpenBlob && !window.navigator.share) {
                            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mahi200534@gmail.com", "_blank");
                            }
                        }}
                        >
                        mahi200534@gmail.com
                    </a>

                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">Portfolio</a>. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/MAHIDHAR1232">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/mahidhar-angam-1b9a692b5/">LinkedIn</a></li>
                    <li><a target='_blank' href="https://x.com/mcms_A1232/communities/explore">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}