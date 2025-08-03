# Tình trạng hỗ trợ

Theo như mình xem xét thì tính đến ngày 29/4/2025, khả năng chơi các game Nobihaza trên các thiết bị sẽ như dưới đây:

## Windows

Đối với Windows thì không có quá nhiều thứ để nói, vì tất cả các game Nobihaza đều sẽ hỗ trợ Windows.

### RPG Maker 2000/2003

> Tất cả game đều sẽ hỗ trợ, tuy nhiên cần cài đặt một số thư viện và chỉnh sửa một số cài đặt.

Đa số các game đều sẽ yêu cầu bạn cài đặt gói khởi chạy (RTP) và chuyển đổi vùng của thiết bị thành tiếng Nhật trước khi chơi. Hãy đọc mục **Điều kiện cơ bản** cho hệ điều hành của bạn để biết thêm chi tiết.

#### Tiếng Nhật/Tiếng Anh

Trừ **Nobita no Senki ACE** (do game này có sử dụng một số script phức tạp nên có thể sẽ không ổn định), thì toàn bộ các game tiếng Nhật và tiếng Anh đều có thể chơi trên lớp tương thích **EasyRPG** mà không phải qua bất kì chỉnh sửa nào, với trải nghiệm không khác gì `RPG_RT.exe` gốc.

Nếu bạn muốn trải nghiệm gốc mà không thông qua phần mềm nào, bạn cũng có thể chuyển vùng của thiết bị sang Nhật Bản và chơi game bằng tệp `RPG_RT.exe` gốc.

#### Tiếng Việt

Đa số các bản dịch tiếng Việt đều sử dụng EasyRPG, nên bạn **bắt buộc** chơi bằng [bản EasyRPG đã chỉnh sửa của cộng đồng](https://nbhzvn.one/tools/EasyRPG%20Ti%E1%BA%BFng%20Vi%E1%BB%87t%20%280.8%29) để hỗ trợ tốt ngôn ngữ tiếng Việt.<br>Sau đó bạn chỉ cần thay đổi ngôn ngữ của game ở menu thành Tiếng Việt (Vietnamese) là được.

Tuy nhiên, có một số game lại yêu cầu chơi bằng tệp tin `RPG_RT.exe` và không thể chơi được bằng EasyRPG (nếu cố gắng chơi thì sẽ bị lỗi), tiêu biểu là các bản dịch dưới đây:

* Nobihaza 1
* Nobihaza 2 (bản dịch của Hiroshi)
* Nobihaza Another Edition
* Nobihaza G Rebirth (bản dịch của Hiroshi)
* Nobihaza Mudai ni Kaizouban 4 (bản dịch của Minh Trần)
* Nobihaza Left 3 Dead (bản dịch của Ren)

### RPG Maker XP/VX/VX Ace

> Tất cả game đều sẽ hỗ trợ, tuy nhiên cần cài đặt một số thư viện.

Tất cả các game Nobihaza được làm bằng các phần mềm này đều sẽ hỗ trợ Windows, bất kể là game đó dùng RGSS Player hoặc là dùng MKXP để chạy game.

Tuy nhiên thì bạn nên cài đặt cả RTP của game (đã có ở phần **Điều kiện cơ bản**) để trải nghiệm game được tốt nhất.

### RPG Maker MV/MZ

> Tất cả game đều sẽ hỗ trợ.

Tương tự như RPG Maker XP/VX/VX Ace, thậm chí là bạn gần như sẽ không phải cài đặt thêm bất kì thư viện nào. Tuy nhiên thì các game RPG Maker MV sẽ yêu cầu cấu hình khá cao, hãy chắc chắn máy bạn có đủ cấu hình khi chơi.

## macOS

### RPG Maker 2000/2003

> 90% game đều sẽ có thể chơi được ổn định thông qua các công cụ hỗ trợ.

* Khuyên dùng EasyRPG để có trải nghiệm game tốt nhất, vì EasyRPG hỗ trợ chính thức trên macOS. Tuy nhiên vẫn có một số game sẽ không chạy được, hoặc chạy không ổn định như mình đã đề cập ở mục Windows.

* Bạn vẫn có thể dùng Wine (Kegworks hoặc CrossOver) để chơi trực tiếp tệp tin `RPG_RT.exe`, tuy nhiên cách này mình không khuyến khích vì độ ổn định sẽ không cao. Chỉ nên thử cách này khi game bạn muốn chơi không thể chơi được bằng EasyRPG.

### RPG Maker XP/VX/VX Ace

> Gần như không có game nào có thể chạy được ổn định, kể cả khi có công cụ hỗ trợ.

Các game này sẽ được chia ra làm 2 loại: **RGSS Player** (chạy bằng tệp `Game.exe` gốc) và **MKXP** (mkxp-z, một lớp tương thích cho RPG Maker XP/VX/VX Ace).

* Bạn bắt buộc phải dùng Wine (Kegworks hoặc CrossOver) để có thể chơi các game này bằng tệp `Game.exe` gốc. Tuy nhiên thì RGSS Player sử dụng DirectX 9 (chứ không phải DirectX 10 hay 11), nên game sẽ chạy rất chậm do DXVK không thể hoạt động được trên DirectX 9 và phải dùng WineD3D để thay thế.<br>Ngay cả CrossOver cũng không cứu được trường hợp này.

* Một số máy sẽ không thể phát được nhạc MIDI nếu chơi thông qua Wine.

* Có thể dùng MKXP (vốn hỗ trợ cho cả macOS), tuy nhiên ở thời điểm hiện tại thì gần như không có game Nobihaza nào có thể chạy được bằng MKXP trên macOS. Mình sẽ nghiên cứu thêm để có thể sửa được vấn đề này, nhưng nó sẽ rất là lâu.

### RPG Maker MV/MZ

> Đa số game đều có thể chơi được ổn định thông qua các công cụ hỗ trợ. Rất may mắn.

Bản chất của các game này là dựa trên NW.js (Node.js + HTML5), và NW.js hỗ trợ cho cả macOS; nên về cơ bản thì bạn có thể chạy các game này trên cả macOS mà không thông qua Wine hay bất kì lớp tương thích nào. Vì thế nên trải nghiệm chơi game sẽ không khác gì các hệ điều hành khác.

Tuy nhiên, vẫn có một số game sử dụng thư viện dành riêng cho Windows và sẽ không thể chơi được nếu không chỉnh sửa lại dữ liệu của game, tiêu biểu là các game dưới đây:

* Nobihaza No Hope MV Remake
* Nobihaza Ero 1/2

## Linux

Rất may mắn là đa số game đều có thể chạy được trên Linux, vì Wine trên Linux ổn định hơn trên macOS rất nhiều.

### RPG Maker 2000/2003

> Đa số game đều sẽ có thể chạy ổn định thông qua các công cụ hỗ trợ.

* Khuyên dùng EasyRPG để có trải nghiệm game tốt nhất, vì EasyRPG hỗ trợ chính thức trên Linux. Tuy nhiên vẫn có một số game sẽ không chạy được, hoặc chạy không ổn định như mình đã đề cập ở mục Windows.

* Bạn vẫn có thể dùng Wine để chơi trực tiếp tệp tin `RPG_RT.exe`, tuy nhiên cách này mình không khuyến khích vì độ ổn định sẽ không cao. Chỉ nên thử cách này khi game bạn muốn chơi không thể chơi được bằng EasyRPG.

### RPG Maker XP/VX/VX Ace

> Đa số game đều có thể chạy ổn định thông qua các công cụ hỗ trợ.

Các game này sẽ được chia ra làm 2 loại: **RGSS Player** (chạy bằng tệp `Game.exe` gốc) và **MKXP** (mkxp-z, một lớp tương thích cho RPG Maker XP/VX/VX Ace).

* Thật may mắn khi DXVK trên Linux không bị lỗi giống với trên macOS, nên mình vẫn khuyên bạn nên chạy bằng tệp tin `Game.exe` thông qua Wine, cho đến khi MKXP đủ ổn định để có thể chạy trên Linux.

* MKXP trên Linux thì cũng không khác gì nhiều so với macOS, đa số game đều cũng sẽ không tương thích với Linux ở thời điểm hiện tại.

### RPG Maker MV/MZ

> Đa số game đều sẽ có thể chạy ổn định thông qua các công cụ hỗ trợ. Một số game sẽ hoàn toàn không thể chạy được.

Không khác gì so với macOS.

## Android

Rất may mắn khi Android có một công cụ tên là JoiPlay, và nó đã hỗ trợ gần như tất cả các game RPG Maker. EasyRPG cũng không ngoại lệ.

### RPG Maker 2000/2003

> Đa số game đều sẽ có thể chạy ổn định thông qua các công cụ hỗ trợ. Một số game sẽ hoàn toàn không thể chạy được.

* Bạn bắt buộc phải chơi bằng EasyRPG cho tất cả các game. Khả năng hỗ trợ thì mình đã nói ở mục Windows, đối với các hệ điều hành khác cũng sẽ tương tự như vậy.

* Đối với game không thể chạy được trên EasyRPG thì không còn cách nào khác. Bạn bắt buộc phải có máy tính thôi.

### RPG Maker XP/VX/VX Ace

> Đa số game đều sẽ có thể chạy ổn định thông qua các công cụ hỗ trợ. Một số game sẽ hoàn toàn không thể chạy được.

* JoiPlay đã port MKXP cho Android cực kì tốt nên đa số game đều đã có thể chơi được thông qua MKXP trên JoiPlay, với độ ổn định còn hơn cả MKXP trên macOS với Linux.

* Đối với game không thể chạy được thông qua JoiPlay (có cơ chế mã hoá đặc biệt, hay có thư viện chỉ dành riêng cho Windows) thì không còn cách nào khác. Bạn bắt buộc phải có máy tính thôi.

### RPG Maker MV/MZ

> Đa số game đều sẽ có thể chạy ổn định thông qua các công cụ hỗ trợ. Một số game sẽ hoàn toàn không thể chạy được.

* JoiPlay đã port một phần của NW.js vào Android, nên bạn đã có thể chơi hầu hết các game dạng này trên Android; nhưng độ ổn định sẽ không bằng trên máy tính do NW.js không thể port hoàn toàn lên thiết bị di động được.

* Đối với các game sử dụng thư viện dành riêng cho Windows thì sẽ hoàn toàn không thể chạy được, và bạn bắt buộc phải sửa game hoặc có máy tính.

## iOS

Cảm ơn Apple rất nhiều, vì cái tính đóng của iOS mà gần như không có game Nobihaza nào có thể chạy được ổn định cả.

Giống như các ứng dụng iOS bên thứ 3 khác, bạn cần có máy tính, hoặc một ứng dụng để hỗ trợ cài ứng dụng bên thứ ba để cài các công cụ hỗ trợ; và thường sẽ phải cài lại mỗi 7 ngày.

### RPG Maker 2000/2003

> Đa số game đều sẽ có thể chạy được thông qua các công cụ hỗ trợ, tuy nhiên sẽ không được ổn định như các hệ điều hành khác, và một số game sẽ hoàn toàn không thể chạy được.

* Vào ngày 11/1/2024, mình đã tải lên một bản thử nghiệm của EasyRPG dành cho iOS (thậm chí còn trước cả đội ngũ phát triển EasyRPG!), và từ đó đã có nhiều game Nobihaza cũ có thể chạy được trên iOS; mặc dù có một số lưu ý so với các hệ điều hành khác:
    * EasyRPG sẽ được chạy thông qua RetroArch chứ không có ứng dụng riêng, vì thế nên có một số thứ sẽ phụ thuộc vào RetroArch. Bạn nên đọc cả hướng dẫn sử dụng của RetroArch nữa.
    * Tệp tin MIDI sẽ không thể phát nếu như không có tệp tin `easyrpg.soundfont` trong mỗi thư mục game.
    * Một số game sẽ không thể lưu được tiến trình.

* Những game còn lại sẽ hoàn toàn không chạy được trên iOS.

### RPG Maker XP/VX/VX Ace

> **Không có game nào chạy được trên iOS cả.** Một lần nữa, cảm ơn Apple rất nhiều.

Mình đang nghiên cứu để phát triển một bản MKXP dành cho iOS, nhưng mình sẽ không biết bao giờ nó mới hoàn thành được vì nó yêu cầu rất nhiều thời gian và công sức.

### RPG Maker MV/MZ

> **Có thể chạy được, nhưng cần phải có MacBook, iPhone/iPad và am hiểu về phát triển ứng dụng cho iOS.**

Bản chất các game này được làm bằng JavaScript, nên bạn vẫn có thể port game sang iOS giống như cách mà [**Doraemon: Nobita's Resident Evil 2 (Việt Hoá)**](https://nobi2.s1432.org) đã làm, bằng cách cho game vào một trình duyệt nhúng (embedded browser, có thể là WKWebView hoặc UIWebView). Tuy nhiên cách này yêu cầu bạn cần phải có một chiếc MacBook, một chiếc iPhone/iPad và một chút am hiểu về phát triển ứng dụng cho iOS/JavaScript để có thể sửa lỗi trong quá trình port.

Mình sẽ không hướng dẫn về cái này. Nếu bạn tò mò thì bạn có thể tìm hiểu hướng dẫn ở trên Internet.
