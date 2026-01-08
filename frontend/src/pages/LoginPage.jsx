import React,{useState} from 'react'
import { useAuthStore } from '../store/useAuthStore'
import BorderAnimatedContainer from '../components/BorderAnimatedContainer'
import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon } from 'lucide-react'
import { Link } from 'react-router'

/**
 * Renders the login page with a controlled email/password form and an illustrative panel.
 *
 * The form is bound to local state and, on submit, calls the auth store's `login` with the form data.
 * The submit button is disabled and shows a loader while `isLogginIn` is true.
 * @returns {JSX.Element} The login page React element.
 */
function LoginPage() {
  const {login,isLogginIn}=useAuthStore()
  const [formData,setFormData]=useState({email:"",password:""})
  const handleSubmit=(e)=>{
    e.preventDefault()
    login(formData)
  }
  return (
    <div className="w-full flex items-center justify-center p-4 bg-zinc-900">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            {/* FORM CLOUMN - LEFT SIDE */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-zinc-700/50">
              <div className="w-full max-w-md">
                {/* HEADING TEXT */}
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-violet-500 mb-4" />
                  <h2 className="text-2xl font-bold text-zinc-200 mb-2">Welcome Back</h2>
                  <p className="text-zinc-400">Sign in to your account</p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
      
                  {/* EMAIL INPUT */}
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />

                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>

                  {/* PASSWORD INPUT */}
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />

                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="input"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button className="auth-btn" type="submit" disabled={isLogginIn}>
                    {isLogginIn ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>

            {/* FORM ILLUSTRATION - RIGHT SIDE */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-8 bg-zinc-900">
              <div className="w-full">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/login.png"
                    alt="Glassmorphism conversation illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-violet-400">Connect with the world</h3>

                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy Setup</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default LoginPage