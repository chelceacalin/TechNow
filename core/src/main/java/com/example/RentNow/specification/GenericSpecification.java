package  com.example.RentNow.specification;

import org.springframework.data.jpa.domain.Specification;

import static  com.example.RentNow.util.GenericConstants.IS_ACTIVE;
import static  com.example.RentNow.util.GenericConstants.IS_AVAILABLE;

public class GenericSpecification {

	public static <T> Specification<T> fieldNameLike(String field, String fieldName) {
		return (root, query, criteriaBuilder) -> criteriaBuilder.like(criteriaBuilder.lower(root.get(fieldName)), "%" + field.toLowerCase() + "%");
	}

	public static <T> Specification<T> isAvailable(Boolean isAvailable) {
		return ((root, query, criteriaBuilder) -> {
			if (Boolean.TRUE.equals(isAvailable)) {
				return criteriaBuilder.isTrue(root.get(IS_AVAILABLE));
			} else {
				return criteriaBuilder.isFalse(root.get(IS_AVAILABLE));
			}
		});
	}

	public static <T> Specification<T> isActive(Boolean isActive) {
		return ((root, query, criteriaBuilder) -> {
			if (Boolean.TRUE.equals(isActive)) {
				return criteriaBuilder.isTrue(root.get(IS_ACTIVE));
			} else {
				return criteriaBuilder.isFalse(root.get(IS_ACTIVE));
			}
		});
	}
}
