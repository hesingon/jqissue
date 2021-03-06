Rails.application.routes.draw do
  resources :passwords, controller: "clearance/passwords", only: [:create, :new]
  resource :session, controller: "clearance/sessions", only: [:create]

  resources :users, controller: "clearance/users", only: [:create] do
  resources :users, only: [:show, :edit, :update, :destroy] 

    resource :password,
      controller: "clearance/passwords",
      only: [:create, :edit, :update]
  end

root 'miscellaneous#home'
  get "/sign_in" => "clearance/sessions#new", as: "sign_in"
  delete "/sign_out" => "clearance/sessions#destroy", as: "sign_out"
  get "/sign_up" => "clearance/users#new", as: "sign_up"
  get "/auth/:provider/callback" => "sessions#create_from_omniauth"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get "/about" => "miscellaneous#about"
get "/civilact" => "miscellaneous#civil"
get "/statuteslist" => "miscellaneous#statuteslist"

end
