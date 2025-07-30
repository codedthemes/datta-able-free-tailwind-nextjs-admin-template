// next
import Image from 'next/image';
import NextLink from 'next/link';

const logo = '/assets/images/logo-dark.svg';

// ================================= || REGISTER PAGE ||============================== //

export default function LoginPage() {
  return (
    <div className="auth-main relative overflow-x-hidden overflow-y-auto">
      <div className="auth-wrapper v1 flex h-full min-h-screen w-full items-center">
        <div className="auth-form relative flex min-h-screen grow flex-col items-center justify-center px-6 py-3">
          <div className="relative w-full max-w-[350px]">
            <div className="auth-bg">
              <span className="bg-theme-bg-1 absolute top-[10px] right-[-100px] block h-[300px] w-[300px] animate-[floating_7s_infinite] rounded-full"></span>
              <span className="bg-primary-500 absolute top-[150px] right-[-150px] block h-5 w-5 animate-[floating_9s_infinite] rounded-full"></span>
              <span className="bg-theme-bg-1 absolute bottom-[150px] left-[-150px] block h-5 w-5 animate-[floating_7s_infinite] rounded-full"></span>
              <span className="bg-theme-bg-2 absolute bottom-[10px] left-[-100px] block h-[300px] w-[300px] animate-[floating_9s_infinite] rounded-full"></span>
            </div>
            <div className="card w-full shadow-none sm:my-2">
              <div className="card-body !p-10">
                <div className="mb-8 text-center">
                  <a href="#">
                    <Image src={logo} alt="img" className="auth-logo mx-auto" width={100} height={50} />
                  </a>
                </div>
                <h4 className="mb-4 text-center font-medium">Sign up</h4>
                <div className="mb-3 grid grid-cols-12 gap-3">
                  <div className="col-span-12 sm:col-span-6">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email Address" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="mb-4">
                  <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>
                <div className="mt-1 flex flex-wrap items-center justify-between">
                  <div className="form-check">
                    <input className="form-check-input input-primary" type="checkbox" id="customCheckc1" readOnly />
                    <label className="form-check-label text-muted" htmlFor="customCheckc1">
                      I agree to all the Terms &amp; Condition
                    </label>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button type="button" className="btn btn-primary mx-auto shadow-2xl">
                    Sign up
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap items-end justify-between">
                  <h6 className="mb-0 font-medium">Already have an Account?</h6>
                  <NextLink href="/login" className="text-primary-500">
                    Login
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
