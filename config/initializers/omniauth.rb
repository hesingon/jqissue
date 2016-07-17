Rails.application.config.middleware.use OmniAuth::Builder do
      provider :facebook, '671118143035796', 'b9db66ff9402460972eecaed8d0bdd9c'
    end