package  com.example.RentNow.controller;

import  com.example.RentNow.service.ReportService;
import com.example.RentNow.util.EmailSenderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/reports")
@Slf4j
public class ReportController extends BaseController {

	final ReportService reportService;
	final EmailSenderService emailSenderService;

	@GetMapping("/download-pdf/{email}")
	public ResponseEntity<Object> downloadJson(@PathVariable(name = "email") String email,
											   @RequestParam(name = "month", required = false) String month,
											   @RequestParam(name = "wantCopyOnEmail", required = false) boolean wantCopyOnEmail,
											   @RequestParam(name = "isAdmin", required = false) boolean isAdmin) {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_PDF);
		headers.setContentDispositionFormData("attachment", "filename.pdf");
		log.info("Generating report for user with email {} for month {} with copy on email: {}, isAdmin: {}", email, month, wantCopyOnEmail, isAdmin);

		byte[] pdfData = reportService.generateTable(email, month, isAdmin);

		if (wantCopyOnEmail) {
			emailSenderService.sendEmail(email, "Copy of your book report", "Hi, " + email + ", here is a copy of your book report that you requested", pdfData);
		}

		return buildOkResponse(pdfData, headers);
	}
}
