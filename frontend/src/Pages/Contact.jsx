import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Basic form validation
        if (!formData.email || !formData.subject || !formData.message) {
            setFormStatus('Please fill out all fields.');
            setIsSubmitting(false);
            return;
        }

        // Simulate a successful submission:
        setTimeout(() => {
            setFormStatus('Your message has been sent successfully! Thank you.');
            setFormData({
                email: '',
                subject: '',
                message: '',
            });
            setIsSubmitting(false);
        }, 2000);  // Simulate a 2-second delay
    };

    return (
        <section className="bg-gray-100 py-16">
            <div className="px-4 mx-auto max-w-screen-md bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-primary mb-6">Contact Us💌</h2>
                <p className="mb-8 text-lg text-center text-gray-600">
                    Got a technical issue? Want to send feedback about a beta feature? Let us know. 😇😇
                </p>

                {formStatus && (
                    <div
                        className={`mb-8 text-center p-3 rounded-lg ${
                            formStatus.includes('success') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}
                    >
                        {formStatus}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-lg font-medium text-gray-700">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                            className="form__input mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-lg font-medium text-gray-700">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Let us know, how can we help you."
                            className="form__input mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-lg font-medium text-gray-700">Your Message</label>
                        <textarea
                            rows="5"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Leave a comment.....!!"
                            className="form__input mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-3 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
