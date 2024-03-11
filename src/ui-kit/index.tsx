import {
  Skeleton,
  CircularProgress as Spinner,
  LinearProgress,
  Box,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { visuallyHidden } from "@mui/utils"

import AlertTtriangleIconSVG from "../assets/images/icons/alert-triangle.svg?react"
import ArchiveBoxIconSVG from "../assets/images/icons/archive-box.svg?react"
import ArrowLeftIconSVG from "../assets/images/icons/arrow-left.svg?react"
import ArrowRightIconSVG from "../assets/images/icons/arrow-right.svg?react"
import BarcodeIconSVG from "../assets/images/icons/barcode.svg?react"
import BellIconSVG from "../assets/images/icons/bell.svg?react"
import BellRedCircleIconSVG from "../assets/images/icons/bell-red-circle.svg?react"
import CalendarIconSVG from "../assets/images/icons/calendar.svg?react"
import CaretDownIconSVG from "../assets/images/icons/caret-down.svg?react"
import CaretLeftIconSVG from "../assets/images/icons/caret-left.svg?react"
import CaretRightIconSVG from "../assets/images/icons/caret-right.svg?react"
import CaretUpIconSVG from "../assets/images/icons/caret-up.svg?react"
import ChartPieIconSVG from "../assets/images/icons/chart-pie.svg?react"
import CheckCircleIconSVG from "../assets/images/icons/check-circle.svg?react"
import ClipboardTextIconSVG from "../assets/images/icons/clipboard-text.svg?react"
import CommandIconSVG from "../assets/images/icons/command.svg?react"
import CubeIconSVG from "../assets/images/icons/cube.svg?react"
import FadersHorizontalIconSVG from "../assets/images/icons/faders-horizontal.svg?react"
import FileIconSVG from "../assets/images/icons/file.svg?react"
import GearSixIconSVG from "../assets/images/icons/gear-six.svg?react"
import LinkSimpleIconSVG from "../assets/images/icons/link-simple.svg?react"
import MinusIconSVG from "../assets/images/icons/minus.svg?react"
import SearchIconSVG from "../assets/images/icons/search.svg?react"
import TrashIconSVG from "../assets/images/icons/trash.svg?react"
import UploadIconSVG from "../assets/images/icons/upload.svg?react"
import UserCheckIconSVG from "../assets/images/icons/user-check.svg?react"
import UserMinusIconSVG from "../assets/images/icons/user-minus.svg?react"
import UserPlusIconSVG from "../assets/images/icons/user-plus.svg?react"
import UserIconSVG from "../assets/images/icons/user.svg?react"
import XIconSVG from "../assets/images/icons/X.svg?react"
import UsersIconSVG from "../assets/images/icons/Users.svg?react"
import XCircleIconSVG from "../assets/images/icons/XCircle.svg?react"
import HomeIconSVG from "../assets/images/icons/home.svg?react"
import ChatIconSVG from "../assets/images/icons/Chat.svg?react"
import EyeIconSVG from "../assets/images/icons/Eye.svg?react"
import ChevronDownIconSVG from "../assets/images/icons/chevron-down.svg?react"
import ChevronLeftIconSVG from "../assets/images/icons/chevron-left.svg?react"
import ChevronRightIconSVG from "../assets/images/icons/chevron-right.svg?react"
import ChevronUpIconSVG from "../assets/images/icons/chevron-up.svg?react"
import CheckSquareIconSVG from "../assets/images/icons/check-square.svg?react"
import CheckIconSVG from "../assets/images/icons/check.svg?react"
// import IconSVG from "../assets/images/icons/"

import CheckboxOffSVG from "../assets/images/chekbox_off.svg?react"
import CheckboxOnSVG from "../assets/images/chekbox_on.svg?react"
import SelectOffSVG from "../assets/images/select_off.svg?react"
import SelectOnSVG from "../assets/images/select_on.svg?react"

export {
  // Icon svg components
  AlertTtriangleIconSVG,
  ArchiveBoxIconSVG,
  ArrowLeftIconSVG,
  ArrowRightIconSVG,
  BarcodeIconSVG,
  BellIconSVG,
  BellRedCircleIconSVG,
  CalendarIconSVG,
  CaretDownIconSVG,
  CaretLeftIconSVG,
  CaretRightIconSVG,
  CaretUpIconSVG,
  ChartPieIconSVG,
  CheckCircleIconSVG,
  ClipboardTextIconSVG,
  CommandIconSVG,
  CubeIconSVG,
  FadersHorizontalIconSVG,
  FileIconSVG,
  GearSixIconSVG,
  LinkSimpleIconSVG,
  MinusIconSVG,
  SearchIconSVG,
  TrashIconSVG,
  UploadIconSVG,
  UserCheckIconSVG,
  UserMinusIconSVG,
  UserPlusIconSVG,
  UserIconSVG,
  XIconSVG,
  UsersIconSVG,
  XCircleIconSVG,
  HomeIconSVG,
  ChatIconSVG,
  CheckboxOffSVG,
  CheckboxOnSVG,
  EyeIconSVG,
  SelectOffSVG,
  SelectOnSVG,
  ChevronDownIconSVG,
  ChevronLeftIconSVG,
  ChevronRightIconSVG,
  ChevronUpIconSVG,
  CheckSquareIconSVG,
  CheckIconSVG,
  // UI-Kit components
  Spinner,
  LinearProgress,
  Box,
  Skeleton,
  Modal,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
  Paper,
  styled,
  visuallyHidden,
}
