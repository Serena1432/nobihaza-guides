# Định nghĩa

Ở phần này, mình sẽ giải nghĩa của các thuật ngữ và các tên riêng bạn sẽ gặp trong hướng dẫn này, và cả trong khi đang chơi game Nobihaza.

## Về Nobihaza và RPG Maker

### Nobihaza

Hay còn được gọi là **Nobita no Biohazard**, **Nobita's Resident Evil**.

Là một từ dùng để chỉ các game RPG do những người hâm mộ làm ra, được dựa trên bộ truyện Doraemon của Fujiko.F.Fujio và game Resident Evil (Biohazard) của CAPCOM, và có chứa các yếu tố kinh dị, "đục khoét tuổi thơ".

Nobihaza không phải là một series, vì đa số các game thuộc Nobihaza đều không liên quan đến nhau.

### RPG Maker

Là một series các phần mềm làm game RPG dành cho máy tính bởi các công ty con thuộc tập đoàn KADOKAWA. Nobihaza sử dụng các phần mềm làm game từ bản 2000 cho đến bản hiện tại là RPG Maker MZ.

| Phiên bản | Công ty phát triển | Năm ra mắt bản Nhật | Năm ra mắt bản Anh | Game tiêu biểu |
| --- | --- | --- | --- | --- |
| RPG Maker 2000 | ASCII / Enterbrain | 2000 | 2015 | Nobihaza 1, Nobihaza 2 |
| RPG Maker 2003 | Enterbrain | 2002 | 2015 | Nobihaza G Rebirth |
| RPG Maker XP | Enterbrain | 2004 | 2005 | Không có |
| RPG Maker VX | Enterbrain | 2007 | 2008 | Nobihaza Zeta, Nobihaza Omega Kendin |
| RPG Maker VX Ace | Enterbrain | 2011 | 2012 | Nobihaza Insanity Destiny, Nobihaza The Dawn |
| RPG Maker MV | Kadokawa | 2015 | 2015 | Nobihaza 2 MV Remake |
| RPG Maker MZ | Gotcha Gotcha Games | 2020 | 2020 | Chưa có |

### RPG Maker Run Time Package (RTP)

Là các gói khởi chạy, chứa các thư viện và tài nguyên cơ bản để chạy các game RPG Maker. Mỗi phần mềm làm game sẽ có một RTP khác nhau.

Có một số ít game sẽ không cần tới RTP, nhưng đa số game còn lại đều sẽ cần.

### Ruby Game Scripting System (RGSS)

Một bộ công cụ dựa trên Ruby để lập trình script cho các game RPG Maker XP, VX và VX Ace, và đây cũng là hệ thống script chính của các phần mềm làm game này.

Chính vì thế nên thỉnh thoảng mình cũng sẽ gọi chung 3 phần mềm làm game này là "RGSS", bởi vì về cơ bản RPG Maker XP sử dụng RGSS1, VX sử dụng RGSS2 và VX Ace sử dụng RGSS3.

### RGSS Player

Là phần mềm được dùng để chơi game RPG Maker XP/VX/VX Ace do chính Enterbrain phát triển. Nó thường được đi theo các engine này, và nó chính là `Game.exe` chúng ta thường biết khi chơi game được làm bằng các engine đó.

### "Bản dịch kiểu cũ"

Chỉ bản dịch tiếng Việt của các game Nobihaza được làm bằng RPG Maker 2000/2003 sử dụng phông chữ đã được chỉnh sửa để có thể hiển thị các chữ tiếng Việt, do các phần mềm làm game này vốn không hỗ trợ ngôn ngữ tiếng Việt.

Bạn sẽ cài đặt font tuỳ chỉnh đã chỉnh sửa vào máy tính, và chơi trực tiếp bằng tệp `RPG_RT.exe` trên máy tính như game gốc. Các bản dịch này thường sẽ không hỗ trợ EasyRPG do sử dụng phông chữ khác và thường sẽ bị lỗi hình ảnh.

### "Bản dịch kiểu mới"

Chỉ bản dịch tiếng Việt của các game Nobihaza được làm bằng RPG Maker 2000/2003 sử dụng EasyRPG, với bản EasyRPG tiếng Việt đã được chỉnh sửa và có thể chơi trên mọi thiết bị. Bạn sẽ chơi game bằng EasyRPG và đổi ngôn ngữ ở màn hình chính thành Tiếng Việt (Vietnamese).

## Định nghĩa khác

### Windows

Một hệ điều hành trả phí và mã nguồn đóng dành cho máy tính được phát triển bởi tập đoàn Microsoft. Đây là hệ điều hành phổ biến nhất hiện tại, và cũng là hệ điều hành mà đa số chúng ta sử dụng.

### macOS

Một hệ điều hành độc quyền và mã nguồn đóng được phát triển bởi tập đoàn Apple. Mặc dù bản thân hệ điều hành là miễn phí, nhưng nó sẽ chỉ cài được trên các máy Mac của Apple.

### Linux

Bản thân Linux là chỉ là một nhân được các hệ điều hành khác sử dụng. Nó là một nhân miễn phí mã nguồn mở được phát triển ban đầu bởi Linus Torvalds, và sau này là cả cộng đồng Linux Foundation cùng với những người đóng góp khác.

Do tính chất mở của Linux, nhân này yêu cầu các hệ điều hành dựa trên nó cũng phải mã nguồn mở, và chúng ta gọi chung các hệ điều hành này là "Linux distro".

### Linux distro

Chỉ các hệ điều hành sử dụng nhân Linux, bao gồm Ubuntu, Linux Mint, Arch Linux, Fedora, Gentoo, v.v.

Các nhà phát triển có thể thêm các hệ thống và tính năng tuỳ chỉnh của mình vào các distro này, cũng như chỉnh sửa nhân Linux gốc để tối ưu hoá cho distro của mình.

Hầu hết các Linux distro hiện tại đều miễn phí và mã nguồn mở, ngoại trừ một số phiên bản đặc biệt dành cho doanh nghiệp.

### Android

Hệ điều hành phổ biến nhất trên điện thoại, được sử dụng chủ yếu bởi các hãng điện thoại không phải Apple như Samsung, Xiaomi, Oppo, Vivo, v.v.

Bản thân Android gốc là một hệ điều hành mã nguồn mở, nhưng các hãng điện thoại có thể tuỳ biến nó và ra mắt bản hệ điều hành đặc trưng của riêng hãng đó.

### iOS

Một hệ điều hành độc quyền chỉ hỗ trợ cho các thiết bị di động của Apple như iPhone, iPad, iPod, và không thể cài đặt trên điện thoại của các hãng khác.

### CPU (Central Processing Unit)

Người Việt hay gọi bộ phận này là "chip".

Là bộ xử lý trung tâm, là "bộ não" của máy tính. Dùng để xử lý tính toán cũng như các câu lệnh tuần tự được đưa ra bởi người dùng và hệ điều hành.

### GPU (Graphical Processing Unit)

Người Việt hay gọi bộ phận này là "card đồ hoạ".

Là một bộ xử lý riêng để xử lý các tác vụ đồ hoạ (xuất hình, xử lý đồ hoạ game, video, v.v.). Mặc dù có xung nhịp trên mỗi nhân thấp, nhưng nó lại có rất nhiều nhân và chuyên sâu về các tác vụ xử lý song song.

### GPU tích hợp (iGPU)

Là các GPU được tích hợp sẵn vào CPU, và được sử dụng chủ yếu khi máy tính không có GPU rời. Vì GPU dạng này được tích hợp vào CPU, nên hiệu năng của nó thường thua xa so với GPU rời.

GPU tích hợp không có VRAM, thay vào đó sẽ sử dụng RAM của máy tính để chia sẻ sang cho GPU đó.

### GPU rời (dGPU)

Là các GPU được tách biệt hoàn toàn so với CPU (và khi bạn lắp máy tính để bàn thì bạn phải mua riêng). GPU rời có bộ xử lý và VRAM riêng, vì thế nên sẽ giảm bớt được gánh nặng cho CPU.

### RAM (Random Access Memory)

Là bộ nhớ trong tạm thời của máy tính, lưu trữ dữ liệu của các ứng dụng **đang chạy**. Mặc dù có tốc độ rất nhanh, nhưng dữ liệu trên RAM sẽ bị xoá sau khi tắt máy.

Đừng nhầm lẫn nó với **bộ nhớ ngoài**, là các dữ liệu được lưu trữ trên ổ cứng và tồn tại ngay cả sau khi đã tắt máy.

### VRAM (Video RAM)

Là một bộ nhớ riêng dùng để lưu trữ các dữ liệu liên quan đến đồ hoạ của GPU. Nó thường có tốc độ cao hơn so với RAM, thích hợp cho việc xử lý đồ hoạ nhanh.

### Xung nhịp

Là tốc độ mà một CPU có thể xử lý các tác vụ trong mỗi giây, được tính bằng đơn vị hertz (Hz).

1 Hz = 1 chu kì mỗi giây. 1 GHz = 1.000 mHz = 1.000.000 kHz = 1.000.000.000 Hz.

### Nhân CPU

Là một đơn vị xử lý độc lập bên trong CPU. Mỗi nhân có thể xử lý một tác vụ riêng biệt.

### Trình điều khiển (driver)

Là một bộ thư viện để hệ điều hành có thể giao tiếp với các phần cứng trên máy tính. Mỗi phần cứng của máy tính thì sẽ cần một bộ driver khác nhau.

Mỗi hệ điều hành lại sẽ có một cách cài đặt driver khác nhau.

### Phần mềm giả lập (Emulator)

Chỉ một loại phần mềm giả lập cả phần cứng lẫn phần mềm của một nền tảng khác hoặc một máy tính khác, dùng để chạy các phần mềm chỉ hỗ trợ cho một nền tảng với một loại phần cứng đó.

Vì phần mềm giả lập sẽ giả lập cả phần cứng, nên hiệu suất thường sẽ thấp hơn rất nhiều so với khả năng mà máy tính của bạn có thể làm được.

### Lớp tương thích (Compatibility Layer)

Không giống với phần mềm giả lập, lớp tương thích chỉ biên dịch lại các câu lệnh của một nền tảng sang một nền tảng khác mà vẫn giữ nguyên cấu trúc phần cứng.

Vì không giả lập lại phần cứng nên hiệu suất sẽ bị giảm ít hơn so với phần mềm giả lập. Tuy nhiên, đa số các lớp tương thích yêu cầu CPU của máy bạn phải cùng cấu trúc với CPU của nền tảng bạn muốn sử dụng.

### Máy ảo (Virtual Machine)

Là một "máy tính" chạy bên trong máy thật, do trình ảo hóa (hypervisor) tạo ra bằng cách chia sẻ trực tiếp phần cứng thật (CPU, RAM, I/O) cho hệ điều hành khách (guest OS).

Không giống với phần mềm giả lập, máy ảo không mô phỏng CPU khác kiến trúc; thay vào đó, nó chạy gần như nguyên bản trên cùng kiến trúc CPU nên hiệu năng cao hơn đáng kể.

Hiệu suất của máy ảo sẽ cao hơn phần mềm giả lập nhưng thấp hơn lớp tương thích.

### Desktop Environment (DE)

Bạn sẽ thường thấy cụm từ này khi sử dụng Linux.

Dùng để chỉ một bộ phần mềm cung cấp giao diện và trải nghiệm cho người dùng, bao gồm trình quản lý cửa sổ (Window Manager), trình quản lý tệp, bảng điều khiển (Panel, tương tự như Taskbar của Windows hay Menu Bar/Dock của macOS), trình cài đặt và các ứng dụng bổ sung.

Không giống như Windows hay macOS, bạn có thể cài đặt bất kì Desktop Environment nào bạn muốn trên Linux, miễn sao distro của bạn hỗ trợ nó.

### DirectX

Là một thư viện xử lý đồ hoạ dùng để giao tiếp giữa phần mềm và GPU trên hệ điều hành Windows, được phát triển bởi Microsoft.

DirectX còn bao gồm các thư viện để xử lý các tác vụ riêng biệt, như DirectAudio (xử lý âm thanh), Direct3D (xử lý đồ hoạ 3D) và DirectDraw.

### OpenGL/Vulkan

Là một thư viện xử lý đồ hoạ hỗ trợ nhiều hệ điều hành khác nhau, được phát triển bởi Khronos.

Vulkan là một thư viện đồ hoạ riêng cũng được phát triển bởi Khronos, có vai trò nối tiếp OpenGL.

### Metal

Là một thư viện xử lý đồ hoạ độc quyền của Apple để thay thế OpenGL, và chỉ hỗ trợ cho macOS.

### Ruby

Là một ngôn ngữ lập trình mà các engine dựa trên RGSS (XP/VX/VX Ace) sử dụng.

### HTML

Một ngôn ngữ đánh dấu siêu văn bản, được coi là khung xương của một trang web. Phiên bản mới nhất của HTML là phiên bản 5, từ đó chúng ta mới có cái tên HTML5.

### CSS

Một ngôn ngữ đánh dấu khác, dùng để thiết kế giao diện của một trang web.

### JavaScript

Là một ngôn ngữ lập trình mà RPG Maker MV/MZ sử dụng.

HTML5 + CSS + JavaScript thường sẽ đi chung với nhau để tạo nên một trang web tĩnh.

### NW.js

Là một công cụ để kết hợp Node.js với HTML5, CSS và JavaScript, rất tiện lợi cho việc lập trình web nhưng vẫn mụốn tương tác với hệ thống bằng Node.js.

Đây cũng là công cụ được RPG Maker MV/MZ sử dụng để chạy game trên máy tính.

### Cordova

Giống như NW.js, đây cũng là một công cụ để HTML5, CSS và JavaScript có thể tương tác với hệ thống. Tuy nhiên, Cordova lại tập trung hơn vào các thiết bị di động.

### Wine

Đây không phải là rượu, đây là tên của một công cụ.

Wine là một lớp tương thích biên dịch các tập lệnh dành cho Windows sang tập lệnh dành cho các hệ điều hành khác, từ đó giúp các ứng dụng Windows có thể chạy được trên các hệ điều hành khác.

### DXVK

Là một thư viện biên dịch DirectX của Windows sang Vulkan để sử dụng cho các hệ điều hành khác.

### EasyRPG

Là một lớp tương thích dùng để chạy các game RPG Maker 2000/2003. Lớp tương thích này sẽ biên dịch lại các câu lệnh của 2 engine này để làm nó tương thích với nhiều nền tảng, cũng như là tối ưu hóa hiệu năng so với RPG_RT gốc.

Sau này EasyRPG cũng đã thêm nhiều tính năng hơn, tiêu biểu là việc hỗ trợ đa ngôn ngữ, và các dịch giả Nobihaza Việt Nam cũng đã bắt đầu dịch game bằng phần mềm này.

### MKXP

Là một lớp tương thích đa nền tảng dùng để chạy các game RPG Maker XP/VX/VX Ace, tương tự với EasyRPG ở bên RPG Maker 2000/2003. Mặc dù nó thực sự tối ưu hóa hiệu năng so với RGSS Player gốc, tuy nhiên mức độ tương thích của nó còn chưa được cao, nhất là khi ở nền tảng khác.

Ở các phiên bản MKXP mới, lớp tương thích này đã dùng Ruby 3 thay vì 1.9.2 giống như RGSS Player, nên mức độ tương thích của nó với các game Nobihaza lại càng xuống thấp hơn.

### JoiPlay

Một phần mềm miễn phí hỗ trợ chơi các game được làm bằng nhiều engine khác nhau trên điện thoại Android, bao gồm cả RPG Maker (trừ 2000/2003).

Riêng với RPG Mạker XP/VX/VX Ace, JoiPlay cũng sử dụng MKXP do nhóm này tự tùy chỉnh để có thể hỗ trợ game trên điện thoại tốt hơn.

### RetroArch

Một phần mềm tổng hợp lại các công cụ giả lập và lớp tương thích để hỗ trợ chơi game của nhiều nền tảng và máy chơi game khác nhau.

EasyRPG cũng sẽ hỗ trợ RetroArch, và RetroArch là một phương thức bắt buộc để sử dụng EasyRPG trên iOS trước khi có ứng dụng chính thức.

