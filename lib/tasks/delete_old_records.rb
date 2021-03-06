namespace :messages do
  desc "Delete records older than 30 days"
  task delete_30_days_old: :environment do
    Message.where(['created_at < ?', 1.days.ago]).destroy_all
  end
end