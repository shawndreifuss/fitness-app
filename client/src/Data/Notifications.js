import InboxIcon from "@mui/icons-material/Inbox";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

export const notifications = [
    {
      id: 1,
      title: "Email Notifications",
      Icon: InboxIcon,
      field: "notifications.email",
      checked: "${currentUser?settings?.notifications?.email}" ,
      message: "Email notifications changed successfully!",
    },
    {
      id: 2,
      title: "Text Notifications",
      Icon: ChatOutlinedIcon,
      field: "notifications.sms",
      checked: "${currentUser?settings?.notifications?.sms}",
      message: "Text notifications changed successfully!",
    },
    {
      id: 3,
      title: "Push Notifications",
      Icon: NotificationsActiveOutlinedIcon,
      field: "notifications.push",
      checked: "${currentUser?settings?.notifications?.push}",
      message: "Push notifications changed successfully!",
    },
    {
      id: 4,
      title: "Reminders",
      Icon: CampaignOutlinedIcon,
      field: "notifications.reminders",
      checked: "`${currentUser?.notifications?.reminders}`" || false,
      message: "Reminders changed successfully!",
    },
  ];