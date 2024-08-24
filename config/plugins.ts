export default () => ({
    ezforms: {
        config: {
            captchaProvider: {
                name: 'none',
            },
            notificationProviders: [
                {
                    name: 'email',
                    enabled: true,
                    config: {
                        subject: "RC site Contact Form",
                        from: 'noeply@roshanchapagain.com'
                    }
                },
            ]
        }
    }
});
 