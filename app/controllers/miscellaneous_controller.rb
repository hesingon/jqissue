class MiscellaneousController < ApplicationController
	def about
		render :about
	end

	def home
		render :home
	end

	def civil
		render :civil
	end

	def statuteslist
		render :statuteslist
	end
end
